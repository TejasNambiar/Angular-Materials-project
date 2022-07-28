import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Child1FormServiceService } from 'src/app/services/child1-form-service/child1-form-service.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isSmallScreen !: boolean;

  constructor(private breakPointObserver: BreakpointObserver, private service:Child1FormServiceService) { }

  ngOnInit(): void {
    this.service.loadAll()
    this.breakPointObserver
      // use this to observe any changes in size of screen
      // .observe([ Breakpoints.XSmall]) // predefined BreakPoints available
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state:BreakpointState)=>{
        this.isSmallScreen = state.matches
      })
  }

}
