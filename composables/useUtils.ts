export const useUtils = () => {
    const sayHello = () => console.log("hello");
    const sayGoodbye = () => console.log("gudbye");
    return {
        sayHello,sayGoodbye,
    };
};