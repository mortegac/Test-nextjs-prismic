import MyComponent from '../../../../slices/ImageWithCaption';

export default {
  title: 'slices/ImageWithCaption'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image_with_caption","items":[],"primary":{"caption":[{"type":"paragraph","text":"Consequat tempor mollit in aliquip do. Deserunt officia aliquip pariatur cillum nulla reprehenderit proident.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _RedBackground = () => <MyComponent slice={{"variation":"redBackground","name":"redBackground","slice_type":"image_with_caption","items":[],"primary":{"caption":[{"type":"paragraph","text":"Fugiat aute pariatur adipisicing consequat commodo. Quis cupidatat Lorem voluptate incididunt irure commodo consequat aliqua. Eiusmod reprehenderit officia et eu minim voluptate officia et.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"}},"id":"_RedBackground"}} />
_RedBackground.storyName = 'redBackground'

export const _BlueBackground = () => <MyComponent slice={{"variation":"blueBackground","name":"blueBackground","slice_type":"image_with_caption","items":[],"primary":{"caption":[{"type":"paragraph","text":"Quis ad ea qui sit fugiat tempor quis commodo minim laboris adipisicing dolor officia nulla excepteur. Labore officia eiusmod cupidatat qui exercitation ex.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"}},"id":"_BlueBackground"}} />
_BlueBackground.storyName = 'blueBackground'
