import InviteReqUseCase from "../../use_case/invitation/invite_req_use_case";
import AcceptReqUseCase from "../../use_case/invitation/accept_req_use_case";
import RejectReqUseCase from "../../use_case/invitation/reject_req_us_case";
import { Request, Response, NextFunction } from "express";

export default class InvitationController {
    private acceptReqUseCase: AcceptReqUseCase;
    private inviteReqUseCase: InviteReqUseCase;
    private rejectReqUseCase: RejectReqUseCase;
    constructor(acceptUseCase, inviteUseCase, rejectUseCase){
        this.acceptReqUseCase = acceptUseCase;
        this.inviteReqUseCase = inviteUseCase;
        this.rejectReqUseCase = rejectUseCase;

        this.InviteUser = this.InviteUser.bind(this);
      //  this.AcceptUser = this.AcceptUser.bind(this);
    //this.RejectUser = this.RejectUser.bind(this);
    }
    async InviteUser(req: Request, _res: Response, next: NextFunction) {
        try {
            const { targetMail } = req.body;
 //           const { userId, userMail } = ((req as any ) as AuthenticatedUserBody).user;
 //           this.inviteReqUseCase.Execute(target_mail, userId, userMail);
        }catch(e) {
            next(e);
        }

    }

/*
    async AcceptUser(req: Request, res: Response, next: NextFunction) {
        try {

        } catch(e) {

        }
    }

    async RejectUser(req: Request, res: Response, next: NextFunction) {

    }

    */

}