import React from "react";

export const HomePage = () => {
    return (
        <div className="flex flex-row justify-center py-20 bg-white dark:bg-zinc-900">
            <div className="flex flex-col w-[500px] justify-between gap-y-10  items-start pb-10">
                <h1 className="font-bold text-xl">Ajay Krupal K</h1>
                <p>I am a software developer based in Bangalore, India.</p>
                <p>Currently, I work as a software developer at Loyalytics where I build features for the product Swan which powers the largest retailers across the Middle East and Indonesia.</p>
                <p>I love working at the intersection of development and AI.</p>
                <div className="flex flex-col gap-y-6">
                    <h2 className="font-bold">Experience</h2>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row gap-x-1 items-baseline">
                            <h3>Loyalytics</h3>
                            <p className="opacity-50 text-xs font-medium">2023 - now</p>
                        </div>
                        <p className="opacity-75 font-light">Building features for the AI driven omnichannel customer engagement platform - Swan.</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row gap-x-1 items-baseline">
                            <h3>Brillio</h3>
                            <p className="opacity-50 text-xs font-medium">2022 - 2023</p>
                        </div>
                        <p className="opacity-75 font-light">Earned AWS Certified Cloud Practitioner certification and gained hands on experience in Azure.</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row gap-x-1 items-baseline">
                            <h3>IIMBx</h3>
                            <p className="opacity-50 text-xs font-medium">2021 - 2022</p>
                        </div>
                        <p className="opacity-75 font-light">Maintained the official website and led research on the applications and implementation of AWS Workspaces and AWS managed blockchain.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="font-bold">Let&apos;s Connect</h2>
                    <div className="flex flex-row gap-x-4 opacity-75">
                        <a className="flex flex-row gap-x-1 items-center" href="mailto:ajaykrupalk@gmail.com">
                            <p className="underline underline-offset-4 decoration-2 decoration-gray-300">Email</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                        <a className="flex flex-row gap-x-1 items-center" href="https://github.com/ajaykrupalk">
                            <p className="underline underline-offset-4 decoration-2 decoration-gray-300">GitHub</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                        <a className="flex flex-row gap-x-1 items-center" href="https://x.com/ajaykrupalk">
                            <p className="underline underline-offset-4 decoration-2 decoration-gray-300">Twitter</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}