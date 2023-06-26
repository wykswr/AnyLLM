import {getModels} from "../services/api";
import usePending from "./usePending";
import {useEffect, useState} from "react";

const useModelSelect = () => {
    const [fetchModels, isPending] = usePending(getModels);
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState({})
    useEffect(
        () => {
            fetchModels()
                .then((data) => {
                    setModels(data);
                    setSelectedModel(data[0])
                })
                .catch((err) => console.log(err));
        }, [fetchModels]
    )
    return [models, selectedModel, isPending, {setSelectedModel}];
}

export default useModelSelect;