import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from './badge';
import { Button } from "./button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";


interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const Project = ({ title, description, tags, link, github }: ProjectProps) => {
  return (
    <Card className="flex flex-col h-full mt-3">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex flex-wrap">
          {description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {github && (
          <Button variant="outline" size="sm" asChild>
            <Link href={github} target="_blank">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Link>
          </Button>
        )}
        {link && (
          <Button size="sm" asChild>
            <Link href={link} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Project;