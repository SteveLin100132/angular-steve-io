import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { Members } from '../mock-members';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

  selectMember(member: Member): void {
    this.memberService.setSelectedMember(member);
  }
}
