import React from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";


interface ScreenshotButtonProps {
    screenshot: string | null;
    onScheenshotTook: (screenshot: string | null) => void;
}

const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({ screenshot, onScheenshotTook }: ScreenshotButtonProps) => {

    const [isTakingScreenshot, setIsTakingScrenshot] = React.useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScrenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png');

        onScheenshotTook(base64Image);
        setIsTakingScrenshot(false);




    }

    if (screenshot) {
        return (
            <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400"
                onClick={() => onScheenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: `right bottom`,
                    backgroundSize: 180,
                }}
            >

            <Trash weight="fill"/>
            </button>
        );
    }
    return (
        <>
            <button

                type="button"
                className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900"
                onClick={handleTakeScreenshot}
              
            >
                {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
            </button>
        </>
    )
}


export { ScreenshotButton };