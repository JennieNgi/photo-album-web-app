// Generated by https://quicktype.io

export interface Technologies {
    technologies: Technology[];
}

export interface Technology {
    _id:         string;
    name:        string;
    description: string;
    difficulty:  number;
    courses:     Course[];
}

export interface TechCourse {
    code: string;
    name: string;
}

export interface Courses {
    courses: Course[];
}

export interface Course {
    _id:  string;
    code: string;
    name: string;
}


export interface ListComponentProps {
    technologies:Technology[];
    courses:Course[];
}

export interface EditCourseComponentProps {
    courses:Course[];
    onResponse:Function;
    onError:Function;
    RETREIVE_SCRIPT:string;
    setLoading: Function;
}
export interface DeleteTechnologyComponentProps {
    technologies:Technology[];
    onResponse:Function;
    onError:Function;
    RETREIVE_SCRIPT:string;
    setLoading: Function;
}

export interface EditTechnologyComponentProps {
    courses:Course[];
    technologies:Technology[];
    onResponse:Function;
    onError:Function;
    RETREIVE_SCRIPT:string;
    setLoading: Function;
}