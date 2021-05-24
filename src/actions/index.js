export const sqrClick = (id) => {
    return {
        type : 'SQR_CLICK',
        payload : id
    };
}

export const triggerCPU = () => {
    return {
        type : 'TRIGGER_CPU'
    };
}

export const reset = () => {
    return {
        type : 'RESET'
    };
}