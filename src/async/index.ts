

const callSyncInternet = (request: string) => {
    return 'request:' + request;
}

export const callAPI = (request: string, callback: Function) => {
    setTimeout(
        () => {
            const response = callSyncInternet(request)

            callback(response);
        }, 
        1000
    );
}


export const callAPIPromisified = (request: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const response = callSyncInternet(request)
    
                resolve(response);
            }, 
            1000
        );
    });
}


