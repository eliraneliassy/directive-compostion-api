class Disposable {
    isDisposed = false;
    dispose() {
        this.isDisposed = true
    }
}

class Activable {
    isActive = false;
    active() {
        this.isActive = true;
    }
    deactive() {
        this.isActive = false;
    }
}

// class MyClass extends Disposable, Activable {

// }

type Constractor = new (...agrs: any[]) => {};

export function DisposableMixin<Base extends Constractor>(base: Base){
    return class Disposable extends base {
        isDisposed = false;
        dispose() {
            this.isDisposed = true
        }
    }
}

export function ActivableMixin<Base extends Constractor>(base: Base){
    return class Activable extends base {
        isActive = false;
        active() {
            this.isActive = true;
        }
        deactive() {
            this.isActive = false;
        }
    } 
}