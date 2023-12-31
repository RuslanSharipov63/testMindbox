const todoValidator = (params: string): boolean => {
    let result: boolean = false;
    const regValue =/^[а-яёa-z0-9]+/i;
    if (regValue.test(params)) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

export default todoValidator;

/* /^(?=.*[A-Z0-9])[\w.,!\?"'\/$ ]+$/i; */