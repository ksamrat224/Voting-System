import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable, Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*', //frontend url rakhne production ma
  },
})
@Injectable()
export class PollsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(PollsGateway.name);
  private connectedUsers = 0;

  handleConnection(client: Socket) {
    this.connectedUsers++;
    this.logger.log(
      `Client connected: ${client.id} | Total: ${this.connectedUsers}`,
    );
    this.server.emit('stats', { online: this.connectedUsers });
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers--;
    this.logger.log(
      `Client disconnected: ${client.id} | Total: ${this.connectedUsers}`,
    );
    this.server.emit('stats', { online: this.connectedUsers });
  }

 
  emitVoteUpdate(pollId: number, voteCount: number) {
    this.server.emit('voteUpdate', {
      pollId,
      voteCount,
      timestamp: new Date().toISOString(),
    });
  }

  // Broadcast new trending polls
  emitTrendingUpdate(trendingPolls: any[]) {
    this.server.emit('trendingUpdate', trendingPolls);
  }

  // Live online users count
  emitOnlineCount() {
    this.server.emit('stats', { online: this.connectedUsers });
  }
}
