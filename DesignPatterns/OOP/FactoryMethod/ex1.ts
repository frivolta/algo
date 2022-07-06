// Ab Creator
abstract class ToastCreator {
  public abstract createToast(): Toast;

  public render(): string {
    const toast = this.createToast();
    return toast.template;
  }
}

// Creator
class InfoToastCreator extends ToastCreator {
  public createToast(): Toast {
    return new InfoToast();
  }
}

class WarningToastCreator extends ToastCreator {
  public createToast(): Toast {
    return new WarningToast();
  }
}

// Product
interface Toast {
  template: string;
  create(): void;
}

class InfoToast implements Toast {
  template = `<p>info</p>`;
  public create() {
    return this.template;
  }
}

class WarningToast implements Toast {
  template = `<p>info</p>`;
  public create() {
    return this.template;
  }
}

function client(creator: ToastCreator) {
  console.log("Client");
  creator.createToast();
}

client(new InfoToastCreator());
