import { MailerOptions } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

class DefaultMailer {
    from: string;
    constructor() {
        this.from = 'Eltun Ismayilov <info@lorex.az>;';
    }
}

class Transport {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    }
    constructor() {
        this.host = 'mail.webhosting.az';
        this.port=25;
        this.auth={
            user:'info@lorex.az',
            pass:'Cet1nM@1LP@r0Lu()'
        };
        this.secure=false;
    }

}

class MailTemplate{
    dir:string;
    adapter:HandlebarsAdapter;
    options:{
        scrict:boolean,
    }
    constructor(path:string){
     this.dir=path;
     this.adapter=new HandlebarsAdapter();
     this.options={
         scrict:true
     }
    }


}

export class MailCondigs implements MailerOptions {

    defaults: DefaultMailer;
    transport: Transport;
    template: MailTemplate;
    preview?: boolean;
    constructor(path:string) {
    
        this.defaults = new DefaultMailer();
        this.transport = new Transport();
        this.template = new MailTemplate(path);
        this.preview= true //development
    }
}



