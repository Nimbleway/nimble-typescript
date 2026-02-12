// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CrawlPagination, type CrawlPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Retrieve a paginated list of tasks for the authenticated account.
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TaskListResponsesCrawlPagination, TaskListResponse> {
    return this._client.getAPIList('/v1/tasks', CrawlPagination<TaskListResponse>, { query, ...options });
  }

  /**
   * Retrieve the details of a specific task by its ID.
   */
  get(taskID: string, options?: RequestOptions): APIPromise<TaskGetResponse> {
    return this._client.get(path`/v1/tasks/${taskID}`, options);
  }

  /**
   * Retrieve the results of a completed task.
   */
  results(taskID: string, options?: RequestOptions): APIPromise<TaskResultsResponse> {
    return this._client.get(path`/v1/tasks/${taskID}/results`, options);
  }
}

export type TaskListResponsesCrawlPagination = CrawlPagination<TaskListResponse>;

export interface TaskListResponse {
  /**
   * Unique task identifier.
   */
  id: string;

  _query: unknown;

  /**
   * Timestamp when the task was created.
   */
  created_at: string;

  /**
   * Original input data for the task.
   */
  input: unknown;

  /**
   * Current state of the task.
   */
  state: 'pending' | 'success' | 'error';

  /**
   * URL for checking the task status.
   */
  status_url: string;

  /**
   * Account name that owns the task.
   */
  account_name?: string;

  api_type?: 'web' | 'serp' | 'ecommerce' | 'social';

  /**
   * Batch ID if this task is part of a batch.
   */
  batch_id?: string;

  /**
   * URL for downloading the task results.
   */
  download_url?: string;

  /**
   * Error message if the task failed.
   */
  error?: string;

  /**
   * Classification of the error type.
   */
  error_type?: string;

  /**
   * Timestamp when the task was last modified.
   */
  modified_at?: string;

  /**
   * Storage location of the output data.
   */
  output_url?: string;

  /**
   * HTTP status code from the task execution.
   */
  status_code?: number;
}

/**
 * Response containing task details.
 */
export interface TaskGetResponse {
  task: TaskGetResponse.Task;
}

export namespace TaskGetResponse {
  export interface Task {
    /**
     * Unique task identifier.
     */
    id: string;

    _query: unknown;

    /**
     * Timestamp when the task was created.
     */
    created_at: string;

    /**
     * Original input data for the task.
     */
    input: unknown;

    /**
     * Current state of the task.
     */
    state: 'pending' | 'success' | 'error';

    /**
     * URL for checking the task status.
     */
    status_url: string;

    /**
     * Account name that owns the task.
     */
    account_name?: string;

    api_type?: 'web' | 'serp' | 'ecommerce' | 'social';

    /**
     * Batch ID if this task is part of a batch.
     */
    batch_id?: string;

    /**
     * URL for downloading the task results.
     */
    download_url?: string;

    /**
     * Error message if the task failed.
     */
    error?: string;

    /**
     * Classification of the error type.
     */
    error_type?: string;

    /**
     * Timestamp when the task was last modified.
     */
    modified_at?: string;

    /**
     * Storage location of the output data.
     */
    output_url?: string;

    /**
     * HTTP status code from the task execution.
     */
    status_code?: number;
  }
}

/**
 * The results of the completed task.
 */
export type TaskResultsResponse = { [key: string]: unknown };

export interface TaskListParams extends CrawlPaginationParams {}

export declare namespace Tasks {
  export {
    type TaskListResponse as TaskListResponse,
    type TaskGetResponse as TaskGetResponse,
    type TaskResultsResponse as TaskResultsResponse,
    type TaskListResponsesCrawlPagination as TaskListResponsesCrawlPagination,
    type TaskListParams as TaskListParams,
  };
}
