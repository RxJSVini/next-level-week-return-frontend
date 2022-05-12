import { ArrowLeft } from "phosphor-react";
import React, { FormEvent } from "react";
import { feedBackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../services/api";
import axios from "axios";
import { Loading } from "../Loading";

interface FeedBackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent:() => void;
}



const FeedbackContentStep: React.FC<FeedBackContentStepProps> = ({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedBackContentStepProps) => {

    const [screenshot, setScreenshot] = React.useState<string | null>(null);
    const [comment, setComment] = React.useState('');
    const feedbackTypeInfo = feedBackTypes[feedbackType];
    const [isSendingFeedback, setIsSendingFeedback] = React.useState(false);



    function handleSubmitFeedback(event:FormEvent){
        event.preventDefault();
        
        setIsSendingFeedback(true)
        const data = {type: feedbackType, comment, screenshot}
  

        axios.post("https://nlwreturnnode-production.up.railway.app/api/feedbacks", data)
        .then((response ) =>{
            console.log(response.data)
        })  
        .catch((error) =>{
            console.log(error)
        })

        setIsSendingFeedback(false);
        onFeedbackSent();
    }





    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />

                    {feedbackTypeInfo.title}

                </span>

                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100  border-zinc-600 bg-transparent rounded-md  focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes oque esta acontecendo....."
                    onChange={event=>setComment(event.target.value)}
                    >

                </textarea>

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton onScheenshotTook={setScreenshot} screenshot={screenshot}/>
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover-brand-500"
                        disabled={comment.length === 0 || isSendingFeedback }
                    >
                        {isSendingFeedback ? <Loading/> :'Enviar Feedback'}
                    </button>
                </footer>
            </form>


        </>


    )
}


export { FeedbackContentStep };