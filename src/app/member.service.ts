import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Member } from './member';
import { Members } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  selectedMember: Member;

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(Members);
  }

  setSelectedMember(member: Member): void {
    this.selectedMember = member;
  }

  getSelectedMember(): Member {
    return this.selectedMember;
  }
}
