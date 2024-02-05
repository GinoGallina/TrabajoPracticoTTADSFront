import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  usersList: User[] = [];
  activeUsersList: User[] = [];
  filteredUsersList: User[] = [];
  toggleValue: string = 'active';
  search: string = '';

  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
      this.getActive();
      this.filteredUsersList = this.activeUsersList;
    });
  }

  getActive() {
    this.usersList.forEach((user) => {
      if (user.state === 'Active') {
        this.activeUsersList.push(user);
      }
    });
  }

  onDelete(id: String) {
    this.userService.deleteUser(id).subscribe(
      (res: any) => {
        this.activeUsersList = this.activeUsersList.filter(
          (user) => user._id != id
        );

        this.filteredUsersList = this.filteredUsersList.filter(
          (user) => user._id != id
        );

        //Actualizo listas
        this.filteredUsersList.forEach((user) => {
          if (user._id === id) {
            user.state = 'Disable';
          }
        });
        this.usersList.forEach((user) => {
          if (user._id === id) {
            user.state = 'Disable';
          }
        });

        this.notificationService.showSuccessNotification(
          'Usuario eliminado correctamente'
        );
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Ocurrió un error eliminado el usuario'
        );
      }
    );
  }

  onActivate(id: String) {
    this.userService.activateUser(id).subscribe(
      (res: any) => {
        //Actualizo listas
        this.filteredUsersList.forEach((user) => {
          if (user._id === id) {
            user.state = 'Active';
          }
        });
        this.usersList.forEach((user) => {
          if (user._id === id) {
            user.state = 'Active';
          }
        });
        this.filteredUsersList.forEach((user) => {
          if (user._id === id) {
            this.activeUsersList.push(user);
          }
        });

        this.notificationService.showSuccessNotification(
          'Useruario reestablecido correctamente'
        );
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Ocurrió un error reestableciendo el usuario'
        );
      }
    );
  }

  onToggleChange() {
    if (this.toggleValue == 'all') {
      this.filteredUsersList = this.usersList;
    } else {
      this.filteredUsersList = this.activeUsersList;
    }
    this.applySearch();
  }

  applySearch() {
    // Convertir la búsqueda a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
    const searchTerm = this.search.toLowerCase();
    console.log(searchTerm)
    // Filtrar la lista según el término de búsqueda
    this.filteredUsersList = this.filteredUsersList.filter((user) => {
      return (
        user.username.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.type.toLowerCase().includes(searchTerm) ||
        user.address.toLowerCase().includes(searchTerm) ||
        user.state.toLowerCase().includes(searchTerm)
      );
    });
  }

  clearSearch() {
    // Limpiar el campo de búsqueda y mostrar todos los usuarios
    console.log('ss')
    this.search = '';
    console.log(this.search)
    this.onToggleChange();
  }

  isUserDisableState(user: any) {
    return user.state === 'Disable';
  }

  displayedColumns: string[] = [
    'username',
    'email',
    'type',
    'address',
    'state',
    'edit',
    'delete',
  ];
}
