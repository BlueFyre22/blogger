

export class Blog{
  constructor(data){
    this.title = data.title
    this.creator = data.creator 
    this.creatorId = data.creatorId || data.creator.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.createdAt = new Date(data.createdAt) 
    this.updatedAt = new Date(data.updatedAt)
    this.id = data.id
  }
}