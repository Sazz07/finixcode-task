import { Button } from '@/components/ui/button';

type Player = {
  id: string;
  name: string;
  initials: string;
  role?: string;
};

type PlayerListProps = {
  players: Player[];
  totalSlots: number;
};

export function PlayerList({ players, totalSlots }: PlayerListProps) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>Players</h2>
        <span className='flex items-center gap-1 text-sm font-medium text-tertiary-night-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='33'
            viewBox='0 0 32 33'
            fill='none'
            className='shrink-0 size-6 md:size-8'
          >
            <path
              d='M19.7334 10.4312C19.7334 12.4931 18.0619 14.1645 16 14.1645C13.9382 14.1645 12.2667 12.4931 12.2667 10.4312C12.2667 8.36935 13.9382 6.69788 16 6.69788C18.0619 6.69788 19.7334 8.36935 19.7334 10.4312Z'
              fill='#171717'
            />
            <path
              d='M25.9556 12.9201C25.9556 14.2947 24.8413 15.409 23.4667 15.409C22.0921 15.409 20.9778 14.2947 20.9778 12.9201C20.9778 11.5455 22.0921 10.4312 23.4667 10.4312C24.8413 10.4312 25.9556 11.5455 25.9556 12.9201Z'
              fill='#171717'
            />
            <path
              d='M20.9778 21.6312C20.9778 18.8821 18.7492 16.6534 16 16.6534C13.2509 16.6534 11.0223 18.8821 11.0223 21.6312V25.3645H20.9778V21.6312Z'
              fill='#171717'
            />
            <path
              d='M11.0223 12.9201C11.0223 14.2947 9.90796 15.409 8.53338 15.409C7.15881 15.409 6.04449 14.2947 6.04449 12.9201C6.04449 11.5455 7.15881 10.4312 8.53338 10.4312C9.90796 10.4312 11.0223 11.5455 11.0223 12.9201Z'
              fill='#171717'
            />
            <path
              d='M23.4667 25.3645V21.6312C23.4667 20.3194 23.1284 19.0866 22.5343 18.0153C22.8323 17.9386 23.1448 17.8979 23.4667 17.8979C25.5286 17.8979 27.2 19.5693 27.2 21.6312V25.3645H23.4667Z'
              fill='#171717'
            />
            <path
              d='M9.4658 18.0153C8.87168 19.0866 8.53338 20.3194 8.53338 21.6312V25.3645H4.80005V21.6312C4.80005 19.5693 6.47152 17.8979 8.53338 17.8979C8.85533 17.8979 9.16776 17.9386 9.4658 18.0153Z'
              fill='#171717'
            />
          </svg>
          <div className='text-lg font-light md:text-xl'>
            {players.length}/{totalSlots}
          </div>
        </span>
      </div>
      <div className='space-y-2'>
        {players.map((player) => (
          <div
            key={player.id}
            className='flex items-center justify-between p-3 rounded-lg bg-secondary-pure-green'
          >
            <div className='flex items-center'>
              <div className='flex items-center justify-center size-10 mr-3 text-sm md:text-lg  rounded-full  text-secondary-pure-green bg-[#FDE8CD] font-[700]'>
                {player.initials}
              </div>
              <div className='text-[#FDE8CD]'>
                <span className='text-lg font-medium md:text-2xl'>
                  {player.name}
                </span>
                {player.role && (
                  <span className='ml-2 text-xs font-light'>
                    ({player.role})
                  </span>
                )}
              </div>
            </div>
            <Button
              variant='outline'
              size='sm'
              className='h-auto px-3 py-2 bg-white rounded-lg cursor-pointer text-tertiary-night-black md:py-4 hover:bg-gray-100'
            >
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
