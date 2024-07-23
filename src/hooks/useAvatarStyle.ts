import { useMemo } from 'react';

const useAvatarStyle = (avatarUrl: string) => {
  return useMemo(() => ({
    backgroundImage: `url(${avatarUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }), [avatarUrl]);
};

export default useAvatarStyle;
