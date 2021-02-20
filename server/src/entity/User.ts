import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Post } from './Post'

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column(({ nullable: true }))
    password: string;

    @OneToMany(type => Post, post => post.user) 
    posts: Post[];

}
