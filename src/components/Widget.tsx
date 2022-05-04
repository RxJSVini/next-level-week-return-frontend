import React from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

const Widget: React.FC<{}> = () => {
    const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }

    return (
        <Popover>
            <Popover.Button className="absolute bottom-4 right-4 md:bottom-10 flex flex-col items-end">
                <Popover.Panel>
                    <WidgetForm/>
                </Popover.Panel>
                <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group" onClick={toggleWidgetVisibility}>
                    <ChatTeardropDots className="w-6 h-6" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        <span className="pl-2">
                            Feedback
                        </span>
                    </span>
                </button>
            </Popover.Button>
        </Popover>
    )
}

export { Widget };