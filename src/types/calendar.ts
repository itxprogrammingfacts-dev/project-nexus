export interface AvailabilitySlot {
  id: string;
  userId: string;
  dayOfWeek: number; // 0-6, Sunday-Saturday
  startTime: string; // HH:mm format
  endTime: string;   // HH:mm format
  timezone: string;
}

export interface MeetingRequest {
  id: string;
  initiatorId: string;
  recipientId: string;
  proposedTime: string;
  duration: number; // in minutes
  reason: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: string;
  respondedAt?: string;
}

export interface Meeting {
  id: string;
  participantIds: string[];
  title: string;
  description?: string;
  startTime: string; // ISO format
  endTime: string;   // ISO format
  location?: string;
  meetingType: 'video' | 'audio' | 'in-person';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
}
