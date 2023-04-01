    <template>
        <div class="flex flex-wrap justify-center gap-2 md:m-5 md:w-10/12 lg:8/12">
            <!-- About -->
            <Card attr="relative flex flex-col lg:w-6/12 pt-16 md:leading-10" >
                <template v-slot:content>
                    <h1 class="text-lg font-bold md:text-4xl">
                            Hey, I'm Ajay <span class="wave">👋🏼</span>
                    </h1>
                    <p class="text-md font-medium">
                        "Unleashing creativity, one line of code at a time."
                    </p>
                </template>
                <template v-slot:onhover>
                    <p class="text-lg font-medium">Contact at:</p>
                    <h3 class="text-lg font-bold md:text-4xl">
                        <a href="mailto:ajaykrupalk@gmail.com">ajaykrupalk@gmail.com</a>
                    </h3>
                </template>
            </Card>

            <!-- Achievements -->
            <Card attr="pt-10 lg:w-5/12">
                <template v-slot:nohover>
                    <h2 class="text-lg font-bold md:text-3xl">Achievements</h2>
                    <div class="p-3">
                        <ul class="list-disc">
                            <li>Self taught Web Developer</li>
                            <li>AWS Certified Cloud Practitioner</li>
                            <li>Former Tech Intern at IIM-Bangalore</li>
                        </ul>
                    </div>
                </template>
            </Card>

            <!-- Markdown -->
            <Project 
                size="lg:w-3/12"
                link="https://git-react-markdown.netlify.app/"
                title="Markdown App"
                description="Built using ReactJS and TailwindCSS"
                imgposition="self-end"
                imgsrc="./assets/ph-person.png"
                imgsize="h-32 w-12"
            >
                <h2 class="text-lg font-bold md:text-xl">
                    View<br/>The<br />App<br/>
                </h2>
            </Project>
            
            <!-- CodePen Clone -->
            <Project 
                size="lg:w-4/12"
                link="https://github.com/ajaykrupalk/codepen-clone"
                title="CodePen Clone"
                description="Built using ReactJS"
                imgsize="h-36 w-26"
                imgposition="self-end"
                imgsrc="./assets/comp-person.png"
            >
                <h2 class="text-lg font-bold md:text-xl">
                    View <br />Source<br />Code
                </h2>
            </Project>
            
            <!-- Movie App -->
            <Project 
                size="lg:w-4/12"
                link="https://moviereactland.netlify.app/"
                title="Movie Finder Website"
                description="Built using ReactJS and OMDb API"
                imgsize="h-20 w-26"
                imgposition="self-start"
                imgsrc="./assets/laying-person.png"
            >
                <h2 class="text-lg font-bold md:text-xl">
                    View The App
                </h2>
            </Project>
            
            <!-- Weather App -->
            <Project 
                size="lg:w-4/12"
                link="https://github.com/ajaykrupalk/Weather-App"
                title="Weather App"
                description="Built using VueJS, Laravel and TailwindCSS"
                imgsize="h-36 w-26"
                imgposition="self-end"
                imgsrc="./assets/study-person.png"
            >
                <h2 class="text-lg font-bold md:text-xl">View <br> Source<br>Code</h2>
            </Project>
            

            <!-- NBA Bot -->
            <Project 
                size="lg:w-3/12"
                link="https://github.com/ajaykrupalk/NBA-Bot"
                title="Discord NBA Bot"
                description="Built using Python with Discord.py"
                imgsize="h-28 w-26"
                imgposition="self-center"
                imgsrc="./assets/jump-person.png"
            >
                <h2 class="text-lg font-bold md:text-xl">View <br> Source<br>Code</h2>
            </Project>
            

            <!-- TechTools -->
            <Project 
                size="lg:w-4/12"
                link="https://github.com/ajaykrupalk/TechTools"
                title="TechTools"
                description="Built using VueJS, Laravel and TailwindCSS"
                imgsize="h-28 w-26"
                imgposition="self-center"
                imgsrc="./assets/casual-person.png"
                >
                <h2 class="text-lg font-bold md:text-xl">View <br> Source<br>Code</h2>
            </Project>
        </div>
    </template>

    <script>
    import Card from './card.vue';
    import Project from './project.vue';

    export default {
        name: 'Projects',
        components: {
            Card,
            Project,
        }
        
    }
    </script>