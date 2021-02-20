import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import { User } from './User'

@Entity("posts")
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    temperature: string;

    @Column()
    weather: string;

    @Column()
    description: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;

}
