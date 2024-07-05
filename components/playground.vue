<template>
    <div class="space-y-4">
        <div>
            <h3 class="font-mono text-xl">experiments</h3>
        </div>
        <div>
            <div class="flex items-center">
                <a href="https://chat-in-js.vercel.app/" class="space-y-0.5" target="_blank">
                    <h4
                        class="text-base font-medium underline underline-offset-4 decoration-1 font-mono hover:text-gray-300/75">
                        chat/ai</h4>
                </a>
                <GithubStats>15 stars 3 forks</GithubStats>
            </div>
            <p class="text-sm text-gray-300/75">using gemini pro chat with your pdf</p>
        </div>
        <div>
            <div class="flex items-center">
                <a href="https://langground.vercel.app/" class="space-y-0.5" target="_blank">
                    <h4
                        class="text-base font-medium underline underline-offset-4 decoration-1 font-mono hover:text-gray-300/75">
                        langground/ai</h4>
                </a>
                <GithubStats>2 forks</GithubStats>
            </div>
            <p class="text-sm text-gray-300/75">multi-model playground for langchain</p>
        </div>
        <div>
            <a href="https://aitranscribe.vercel.app/" class="space-y-0.5" target="_blank">
                <h4
                    class="text-base font-medium underline underline-offset-4 decoration-1 font-mono hover:text-gray-300/75">
                    transcribe/ai</h4>
            </a>
            <p class="text-sm text-gray-300/75">ai powered transcription of audio to text.</p>
        </div>
    </div>
</template>