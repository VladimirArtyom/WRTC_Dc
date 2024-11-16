import { Router } from "express";
import InvitationController from "../../controllers/invitation/invitation_controller.js";

export default class InvitationRoutes {
    private router: Router;
    private invitationController: InvitationController;
    constructor(router: Router, invitationController: InvitationController) {
        this.router = router;
        this.invitationController = invitationController;
        this.init_router = this.init_router.bind(this);
        this.get_router = this.get_router.bind(this);

        this.init_router();
    }

    private init_router() {
        this.router.post("/invite", this.invitationController.InviteUser);
        //this.router.post("/accept", this.invitationController.AcceptRequest);
        //this.router.post("/reject", this.invitationController.RejectRequest)
    }

    public get_router(): Router {
        return this.router;
    }
}