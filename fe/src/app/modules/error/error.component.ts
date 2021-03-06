import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recogniseError } from 'src/app/services/exceptions';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error: string;
  status:string;
  constructor(private auth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (auth.user == null) this.auth.authenticateNot();
  }

  ngOnInit() {
    this.status = this.activatedRoute.snapshot.params['error'];
    this.error= recogniseError(this.status);
    if (this.error == 'Token expired' || this.error == 'Unauthorized') this.auth.authenticateNotProblem(this.error);
  }

}
