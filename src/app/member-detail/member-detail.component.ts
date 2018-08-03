import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.less']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.member = this.memberService.getSelectedMember();
    console.log(this.member);
  }
}
