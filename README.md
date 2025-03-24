# AI-Powered Chat Backend System

## Objective

Design a backend system that allows users to interact with an AI-powered chat. The system should handle user prompts, AI responses, chat history, feedback, and analytics for user engagement.

## Requirements

### 1. API Endpoints

You must consider the following API functionalities:

#### Chat Management

- **Send a prompt to the AI model**
  - `POST /chat/:sessionId/send`
  - Request Body: `{ text: string }`
  - Response: `{ text: string, tokens: number }`

- **List a user's chat history**
  - `GET /user/:userId/list-chats`
  - Response: 
    ```json
    {
      "chats": [
        {
          "id": "string",
          "name": "string",
          "createdAt": "2023-09-15T14:30:45.123Z"
        }
      ]
    }
    ```

- **Edit the title of a chat**
  - `UPDATE /chat/:sessionId/edit`
  - Request Body: `{ name: string }`

- **Delete a chat**
  - `DELETE /chat/:sessionId`

- **Get messages for a chat**
  - `GET /chat/:sessionId/messages`
  - Response:
    ```json
    {
      "messages": [
        {
          "id": "string",
          "text": "string",
          "sentBy": "user" | "system",
          "timestamp": "2023-09-15T14:30:45.123Z",
          "feedback": "positive" | "negative" | null,
          "tokens": "number" | null
        }
      ]
    }
    ```

#### Feedback System

- **Provide feedback on chat messages**
  - `POST /message/:messageId/feedback`
  - Request Body: `{ type: "'positive' | 'negative'" }`

#### Analytics

- **List top contributors (based on feedback)**
  - `GET /analytics/top-contributors`
  - Response:
    ```json
    {
      "users": [
        {
          "userId": "string",
          "feedbackCount": "number"
        }
      ]
    }
    ```

- **List top users (based on token usage)**
  - `GET /analytics/top-users`
  - Response:
    ```json
    {
      "users": [
        {
          "userId": "string",
          "totalTokens": "number"
        }
      ]
    }
    ```

### 2. Database Design

Design a NoSQL database structure to store the necessary data.

#### Collections

##### Messages
```
messages {
    id: string
    text: string
    sessionId: string
    sentBy: 'user' | 'system'
    feedback: 'positive' | 'negative' | null
    timestamp: DateTime
    tokens: number | null
}
```

##### Sessions
```
sessions {
    id: string
    userId: string
    name: string
    createdAt: DateTime
}
```

##### Users
```
users {
    id: string
    username: string
    email: string
    createdAt: DateTime
    totalTokensUsed: number
    feedbackCount: number
}
```

##### Analytics
```
analytics {
    userId: string
    sessionCount: number
    messageCount: number
    totalTokensUsed: number
    feedbackGiven: number
    lastActive: DateTime
}
```
