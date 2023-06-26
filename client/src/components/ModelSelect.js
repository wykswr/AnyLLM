import {forwardRef} from 'react'
import {Listbox} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import useModelSelect from "../hooks/useModelSelect";
import {ArrowPathIcon} from "@heroicons/react/24/outline";



const ModelSelect = forwardRef((props, ref) => {
        const [models, selectedModel, isPending, {setSelectedModel}] = useModelSelect();


        return (
            <div className={props.className}>
                <Listbox value={selectedModel} by="id" onChange={setSelectedModel}>
                    <Listbox.Button className={"w-full rounded-lg bg-white border border-gray-400 relative"}>
                        <span ref={ref}>{isPending ? <ArrowPathIcon className={"w-6 h-6 mx-auto text-gray-500"}/> : selectedModel.name}</span>
                        <ChevronUpDownIcon className="absolute h-6 w-6 text-gray-400 top-0 right-0.5" aria-hidden="true"/>
                    </Listbox.Button>
                    <Listbox.Options className={"mt-3 bg-white rounded-lg overflow-hidden"}>
                        {models.map((model) => (
                            <Listbox.Option
                                key={model.id}
                                value={model}
                                className="ui-active:bg-blue-500 ui-active:text-white cursor-pointer relative">
                                <CheckIcon aria-hidden="true"
                                           className="hidden ui-selected:block w-6 h-6 absolute top-0 right-0.5"/>
                                <span>{model.name}</span>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        )
    }
)

export default ModelSelect;