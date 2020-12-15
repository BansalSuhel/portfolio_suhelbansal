import React, { useState, useEffect } from 'react'

import PreLoaderAnimation from '../components/PreLoaderAnimation'
import '../styles/PhotosScreen.css'
import '../styles/LeftToRightAnimation.css'

const PhotosScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
    }, [3000])

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='photo-screen'>
      <h1>My Gallery</h1>
      <p>Here are some pics of my travelling journey</p>

      {loading ? (
        <PreLoaderAnimation />
      ) : (
        <div className='photo-screen__img-conatainer'>
          <div className='img__div img__div-1'>
            <img
              src='https://www.dropbox.com/s/y4yeb4m24b6n18q/img_20190807_010147_398_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-2'>
            <img
              src='https://www.dropbox.com/s/908rx5b0d0ie1kg/img_20200106_184837_133_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-3'>
            <img
              src='https://www.dropbox.com/s/kshrg8ums42zhfn/img_20201010_203441_543_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>

          <div className='img__div img__div-4'>
            <img
              src='https://www.dropbox.com/s/6nlspy0it9qitgc/img_20201024_172923_290_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-5'>
            <img
              src='https://www.dropbox.com/s/5803c8305v1gitp/img_20191022_102329_099_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-6'>
            <img
              src='https://www.dropbox.com/s/ncprdk32eriio4r/img_20191025_205339_814_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-7'>
            <img
              src='https://www.dropbox.com/s/fh4opuwkqm8zatv/img_20191106_194219_445_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-8'>
            <img
              src='https://www.dropbox.com/s/vxjw08yfxc0vtar/screenshot_20201210-111157~2_optimized.png?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-9'>
            <img
              src='https://www.dropbox.com/s/kag08e73m3d1yfl/img_20200113_202155_652_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-10'>
            <img
              src='https://www.dropbox.com/s/g78wnkfq9fpym51/img_20200116_180930_705~2_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-11'>
            <img
              src='https://www.dropbox.com/s/6gfark8pu9ehhnm/img_20200126_104001_944_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-12'>
            <img
              src='https://www.dropbox.com/s/vir6fbb3j7qmkz8/img_20200321_180717_197_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-13'>
            <img
              src='https://www.dropbox.com/s/mh7d0v0nzb3wv91/img_20200414_195112_632_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-14'>
            <img
              src='https://www.dropbox.com/s/yijm1qh41jcw59r/img_20190816_182520_872_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-15'>
            <img
              src='https://www.dropbox.com/s/631s6yimu8mxzfc/img_20190814_120319_676~5_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-16'>
            <img
              src='https://www.dropbox.com/s/i4ysvia5lh2nk78/img_20201011_153515_833_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-17'>
            <img
              src='https://www.dropbox.com/s/3yt64q29vtfgfnp/img_20200402_232539_222_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-18'>
            <img
              src='https://www.dropbox.com/s/9bj51vyuynm28qs/screenshot_20201210-111140~2_optimized.png?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-19'>
            <img
              src='https://www.dropbox.com/s/qmhewrrkpsyvtrm/img_20201013_175355_499_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-20'>
            <img
              src='https://www.dropbox.com/s/g78wnkfq9fpym51/img_20200116_180930_705~2_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-21'>
            <img
              src='https://www.dropbox.com/s/xmmt22fs8inw0ej/screenshot_20201210-111212~2_optimized.png?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-22'>
            <img
              src='https://www.dropbox.com/s/7ferjssqkyz71ea/screenshot_20201210-111224~2_optimized.png?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
          <div className='img__div img__div-23'>
            <img
              src='https://www.dropbox.com/s/z1h5h1rcjkzp3oj/img_20191113_215705_807_optimized.jpg?raw=1'
              alt='gallery_pic'
              loading='lazy'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotosScreen
