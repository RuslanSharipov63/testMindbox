const TodoValidator = (params: string): boolean => {
    let result: boolean = false;
    const regValue = /^(?=.*[A-Z0-9])[\w.,!\?"'\/$ ]+$/i;
    if (regValue.test(params)) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

export default TodoValidator;