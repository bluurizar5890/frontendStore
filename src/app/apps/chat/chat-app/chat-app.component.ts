import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../shared/model/chat.model';
import { ChatService } from '../../../shared/service/chat.service';


@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {

  public openTab: string = "call";
  public users: ChatUsers[] = []
  public searchUsers: ChatUsers[] = []
  public chatUser: any
  public profile: any
  public chats: any
  public chatText: string;
  public error: boolean = false;
  public searchText: string
  public show: boolean = false;

  constructor(private chatService: ChatService) {
    this.chatService.getUsers().subscribe(users => {
      this.searchUsers = users
      this.users = users
    })
  }

  ngOnInit() {
    this.userChat()
    this.getProfile()
  }

  public tabbed(val) {
    this.openTab = val
  }

  // Get user Profile
  public getProfile() {
    this.chatService.getCurrentUser().subscribe(userProfile => this.profile = userProfile)
  }

  // User Chat
  public userChat(id: number = 1) {
    this.chatService.chatToUser(id).subscribe(chatUser => this.chatUser = chatUser)
    this.chatService.getChatHistory(id).subscribe(chats => this.chats = chats)
  }

  showContact(){
    this.show = !this.show;
  }

  // Send Message to User
  public sendMessage(form) {

    if (!form.value.message) {
      this.error = true
      return false
    }
    this.error = false
    let chat = {
      sender: this.profile.id,
      receiver: this.chatUser.id,
      receiver_name: this.chatUser.name,
      message: form.value.message
    }
    this.chatService.sendMessage(chat)
    this.chatText = ''
    this.chatUser.seen = 'online'
    this.chatUser.online = true
  }

  searchTerm(term: any) {
    if (!term) return this.searchUsers = this.users
    term = term.toLowerCase();
    let user = []
    this.users.filter(users => {
      if (users.name.toLowerCase().includes(term)) {
        user.push(users)
      }
    })
    this.searchUsers = user
  }

}
