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
                    <h2 className="font-bold">Let's Connect</h2>
                    <div className="flex flex-row gap-x-4 opacity-75">
                        <a className="flex flex-row gap-x-1 items-center">Email</a>
                        <a className="flex flex-row gap-x-1 items-center">GitHub</a>
                        <a className="flex flex-row gap-x-1 items-center">Twitter</a>
                    </div>
                </div>
            </div>
        </div >
    );
}