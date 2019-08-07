import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SecurityUtil } from '../utils/security.util';

@Injectable()
export class AuthorizedGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const user = SecurityUtil.get();
        if (!user || !user.token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}