<template>
    <div id="cal-heatmap"></div>
</template>

<script setup>
import CalHeatMap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const config = useRuntimeConfig();

onMounted(async () => {
    const query = `
  query($userName: String!) { 
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;
    const variables = ref({ userName: 'ajay-krupal-k' });
    const { data } = await axios.post('https://api.github.com/graphql', 
        {
            query,
            variables: variables.value
        },
        {
            headers: {
                'Authorization': `Bearer ${config.public.GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    );

    const responseLength = (data.data.user.contributionsCollection.contributionCalendar.weeks).length
    const response = data.data.user.contributionsCollection.contributionCalendar.weeks[responseLength - 1].contributionDays
    
    try {
        const cal = new CalHeatMap();
        cal.paint({
            itemSelector: '#cal-heatmap',
            domain: {
                type: 'week', label: { text: 'MMM', position: 'left', textAlign: 'end', offset: { x: -6 } }
            },
            subDomain: { type: 'day', radius: 2, gutter: 4 },
            range: 1,
            date: { start: new Date(response[0].date) },
            animationDuration: 0,
            data: {
                source: response,
                x: 'date',
                y: 'contributionCount',
                defaultValue: 0
            },
            scale: {
                color: {
                    type: 'linear',
                    range: ['#343a40', '#e9ecef'],
                    domain: [0, 10],
                },
            },
        },
            [
                [
                    Tooltip,
                    {
                        text: function (date, value, dayjsDate) {
                            return (
                                value + ' contributions' + ' on ' + dayjsDate.format('LL')
                            );
                        },
                    },
                ],
            ]
        );
    } catch (error) {
        console.error('Error initializing CalHeatMap:', error);
    }
});
</script>