import React from "react";

export default function Experience() {
    return (
        <>
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
        </>
    )
}