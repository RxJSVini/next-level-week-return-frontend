import React from "react";
import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/Bug.svg";
import ideiaImageUrl from "../assets/Idea.svg";
import thoughtImageUrl from "../assets/Thought.svg";


const WidgetForm:React.FC<{}> = () =>{
const feedBackTypes = {
    BUG:{
        title:"Problema",
        image:{
            source:bugImageUrl,
            alt:'Imagem de um inseto'
        }
    },
    IDEA:{
        title:"Ideia",
        image:{
            source:ideiaImageUrl,
            alt:'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title:"Outro",
        image:{
            source:thoughtImageUrl,
            alt:'Imagem de um balão de pensamento'
        }
    }
}

//Object.entries(feedbackTypes) =>
/**
 * [
 *  ['BUG',{...}],
 *  ['IDEA',{...}],
 *  ['THOUGHT',{...}]
 * ]
 */

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="text-xl leading-6">
                <span>Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedBackTypes).map(([key, value]) =>{
                    
                    return(
                        <button 
                        
                        className="bg-zinc-800 rounded-lg py-5 w-25 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
                
                        
                        type="button" >
                            <img src={value.image.source} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    )
                })}

            </div>

            <footer className="text-x3 text-neutral-400">
                    Feito com 😍❤️ durante a <a className="underline underline-offset-2"  target={"_blank"} href="https://blog.rocketseat.com.br/tag/nlw/">NLW Return</a>
            </footer>
        </div>
    )
};


export { WidgetForm }