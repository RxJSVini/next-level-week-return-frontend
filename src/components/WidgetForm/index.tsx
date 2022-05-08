import React from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/Bug.svg";
import ideiaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedBackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
};

//Object.entries(feedbackTypes) =>
/**
 * [
 *  ['BUG',{...}],
 *  ['IDEA',{...}],
 *  ['THOUGHT',{...}]
 * ]
 */

export type FeedbackType = keyof typeof feedBackTypes;


const WidgetForm: React.FC<{}> = () => {
    const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = React.useState(false);

    function handleRestartFeedback() {
        setFeedbackType(null);
    };

    return (


        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <CloseButton />
            <header className="text-xl leading-6">
                <span>Deixe seu feedback</span>
            </header>
            {feedbackSent ? (
                <>

                    <FeedbackSuccessStep />
                </>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}

                        />
                    )}
                </>

            )}



            <footer className="text-x3 text-neutral-400">
                Construido com 🤍 durante a <a className="underline underline-offset-2" target="_blank" href="https://blog.rocketseat.com.br/tag/nlw/">NLW Return</a>

            </footer>
        </div>
    )
};


export { WidgetForm }