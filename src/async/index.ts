

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

export const callAPIMyPromisified = (request: string): MyPromise => {
    const myPromise = new MyPromise();

    setTimeout(
        () => {
            const response = callSyncInternet(request)

            myPromise.resolve(response);
        }, 
        1000
    );

    return myPromise;
}



class MyPromise {
    value:any = null;
    thenCb:any = null;
    catchCb: any = null;
    thenPromise:any = null;

    constructor() {

    }

    then(thenCb: any) {
        this.thenCb = thenCb
        this.thenPromise = new MyPromise()

        return this.thenPromise
    }

    catch(catchCb: any) {
        this.catchCb = catchCb;
        this.thenPromise = new MyPromise()

        return this.thenPromise
    }

    resolve(value: any) {
        this.value = value
        this.loop()
    }

    loop() {
        if (this.thenPromise) {
            let thenCbResult = null;
            try {
                thenCbResult = this.thenCb(this.value);
            } catch(e) {
                this.catchCb(e)
            }
            
            if (thenCbResult instanceof MyPromise) {
                this.thenPromise.then()        
            }
            this.thenPromise.resolve(this.thenCb(this.value))
        } else {
            return this.thenCb && this.thenCb(this.value)
        }
    }
}