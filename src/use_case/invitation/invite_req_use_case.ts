class InviteReqUseCase {
    constructor() {

    }

    async Execute(targetMail: string, userMail: string, userId: string){
        console.log(targetMail);
        console.log(userMail);
        console.log(userId);
    }
}

export default InviteReqUseCase;