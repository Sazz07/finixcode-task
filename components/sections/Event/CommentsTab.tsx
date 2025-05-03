'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

type Comment = {
  id: string;
  author: {
    name: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  replies?: Comment[];
};

type CommentsSectionProps = {
  comments: Comment[];
};

export function CommentsSection({
  comments: initialComments,
}: CommentsSectionProps) {
  const [comments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleReply = (commentId: string) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setNewComment('');
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={cn('mb-4', isReply && 'ml-8 relative')}>
      {isReply && (
        <div
          className='absolute left-[-32px] top-0 bottom-0 w-[1px]'
          style={{
            background:
              'repeating-linear-gradient(to bottom, #E5E7EB 0, #E5E7EB 8px, transparent 40px, transparent 24px)',
          }}
        />
      )}
      <div
        className={cn(
          'relative p-4.5 rounded-2xl',
          isReply ? 'bg-light-orange' : 'bg-secondary-pure-green'
        )}
      >
        <div className='flex items-center justify-between mb-1'>
          <div className='flex items-center'>
            <div
              className={cn(
                'flex justify-center items-center mr-3 text-lg rounded-full size-10',
                isReply
                  ? 'bg-secondary-pure-green text-light-orange'
                  : 'bg-light-orange text-secondary-pure-green'
              )}
            >
              {comment.author.initials}
            </div>
            <span
              className={cn(
                'text-2xl font-medium',
                isReply ? 'text-secondary-pure-green' : 'text-light-orange'
              )}
            >
              {comment.author.name}
            </span>
          </div>
          <div className='flex items-center gap-3.5'>
            <span
              className={cn(
                'text-xs font-light md:text-lg',
                isReply ? 'text-secondary-pure-green' : 'text-light-orange'
              )}
            >
              {comment.timestamp}
            </span>
            <button
              className={cn(
                isReply
                  ? 'text-secondary-pure-green'
                  : 'text-tertiary-night-black'
              )}
            >
              <MoreVertical size={22} />
            </button>
          </div>
        </div>
        <p
          className={cn(
            'font-light text-tertiary-night-black md:text-xl',
            isReply ? 'text-tertiary-night-black' : 'text-white'
          )}
        >
          {comment.content}
        </p>
      </div>

      {!isReply && (
        <button
          onClick={() => handleReply(comment.id)}
          className='flex items-center my-3 text-sm text-gray-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='27'
            viewBox='0 0 26 27'
            fill='none'
            className='size-[26px]'
          >
            <path
              d='M16.2485 11.266L21.6652 16.6827L16.2485 22.0994'
              stroke='#808080'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4.33203 4.76601V12.3493C4.33203 13.4986 4.78858 14.6008 5.60124 15.4135C6.41389 16.2261 7.51609 16.6827 8.66536 16.6827H21.6654'
              stroke='#808080'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='mt-1'>Reply</span>
        </button>
      )}

      {replyingTo === comment.id && (
        <div className='relative mt-2 ml-8'>
          <div
            className='absolute left-[-24px] top-0 bottom-0 w-[1px]'
            style={{
              backgroundImage:
                'linear-gradient(to bottom, #e5e7eb 50%, transparent 50%)',
              backgroundSize: '1px 8px',
              backgroundRepeat: 'repeat-y',
            }}
          ></div>
          <form onSubmit={handleSubmitComment} className='flex items-center'>
            <Input
              placeholder='Write a reply...'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className='rounded-full'
            />
            <Button type='submit' size='sm' className='ml-2'>
              Send
            </Button>
          </form>
        </div>
      )}

      {comment.replies?.map((reply) => renderComment(reply, true))}
    </div>
  );

  return (
    <div className='p-5 mt-5 space-y-4 bg-white rounded-[30px]'>
      {comments.map((comment) => renderComment(comment))}

      <div className='mt-4 md:mt-16'>
        <Input
          placeholder='Write a comment'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='py-6 rounded-full px-7'
        />
      </div>
    </div>
  );
}
