import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  usersList: User[]=[];
  activeUsersList: User[]=[];
  filteredUsersList: User[]=[];
  toggleValue:string='active';


  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
      this.getActive();
      this.filteredUsersList= this.activeUsersList;
    });
  } 

  getActive(){
    this.usersList.forEach((user)=>{
      if(user.state==='Active'){
        this.activeUsersList.push(user);
      }
    })
  }


  onDelete(id: String) {
    this.userService.deleteUser(id).subscribe(
      (res: any) => {
        // Filter out the deleted category from the CategoryList array
        
        this.activeUsersList = this.activeUsersList.filter(
          (cat) => cat._id != id
        );

        //Actualizo listas
        this.filteredUsersList.forEach((user)=>{
          if(user._id===id){
            user.state='Disable'
          }
        })
        this.usersList.forEach((user)=>{
          if(user._id===id){
            user.state='Disable'
          }
        })
          
        this.notificationService.showSuccessNotification(
          'User Eliminada'
        );
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Ocurrió un error eliminado el User'
        );
      }
    );
  }

  onActivate(id: String){
    this.userService.activateUser(id).subscribe(
      (res: any) => {

        //Actualizo listas
        this.filteredUsersList.forEach((user)=>{
          if(user._id===id){
            user.state='Active'
          }
        });
        this.usersList.forEach((user)=>{
          if(user._id===id){
            user.state='Active'
          }
        });
        this.filteredUsersList.forEach((user)=>{
          if(user._id===id){
            this.activeUsersList.push(user)
          }
        })

       

        this.notificationService.showSuccessNotification(
          'User Activado'
        );
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Ocurrió un error activando el User'
        );
      }
    );

  }

  onToggleChange(){
    if(this.toggleValue=='all'){
      this.filteredUsersList=this.usersList;
    }else {
      this.filteredUsersList=this.activeUsersList;

    }
  }



  isUserDisableState(user: any) {
    return user.state === 'Disable';
  }

  displayedColumns: string[] = ['username','email','type','address', 'state', 'edit', 'delete'];
}

