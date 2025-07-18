/* eslint-disable asset03-plugin/layer-imports */
import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
