import cover from '../assets/onepiececover.png';

import luffy from '../assets/luffy.png';
import wally from '../assets/wally.jpg';
import ener from '../assets/ener.jpg';
import pandaman from '../assets/pandaman.jpg';
import momo from '../assets/momo.jpg';

const imageList = {
  id: 'one-piece-cover',
  imageName: 'One Piece World',
  imageUrl: cover,
  itemList: [
    {
      id: 'waldo',
      displayName: 'Waldo',
      image: wally,
      found: false,
    },
    {
      id: 'luffy',
      displayName: 'Luffy',
      image: luffy,
      found: false,
    },
    {
      id: 'pandaman',
      displayName: 'Pandaman',
      image: pandaman,
      found: false,
    },
    {
      id: 'ener',
      displayName: 'Ener',
      image: ener,
      found: false,
    },
    {
      id: 'momonosuke',
      displayName: 'Momo',
      image: momo,
      found: false,
    },
  ],
};

export default imageList;
