import React from "react";
import { feedBackTypes, FeedbackType } from "..";


interface FeedBackTypeStepProps {
    onFeedBackTypeChanged: (type: FeedbackType) => void;
};
const FeedbackTypeStep: React.FC<FeedBackTypeStepProps> = ({ onFeedBackTypeChanged }: FeedBackTypeStepProps) => {

    return (
        <>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedBackTypes).map(([key, value]) => {

                    return (

                        <button
                            key={key} className="bg-zinc-800 rounded-lg py-5 w-25 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
                            type="button">

                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}

            </div>
        </>
    )
}


export { FeedbackTypeStep };