import { Status } from './status';

/**
 * An HTTP status that is a informational (1XX).
 */
export type InformationalStatus =
  | Status.Continue
  | Status.SwitchingProtocols
  | Status.Processing
  | Status.EarlyHints;

/**
 * An HTTP status that is a success (2XX).
 */
export type SuccessfulStatus =
  | Status.OK
  | Status.Created
  | Status.Accepted
  | Status.NonAuthoritativeInfo
  | Status.NoContent
  | Status.ResetContent
  | Status.PartialContent
  | Status.MultiStatus
  | Status.AlreadyReported
  | Status.IMUsed;

/**
 * An HTTP status that is a redirect (3XX).
 */
export type RedirectStatus =
  | Status.MultipleChoices
  | Status.MovedPermanently
  | Status.Found
  | Status.SeeOther
  | Status.UseProxy
  | Status.TemporaryRedirect
  | Status.PermanentRedirect;

/**
 * An HTTP status that is a client error (4XX).
 */
export type ClientErrorStatus =
  | Status.BadRequest
  | Status.Unauthorized
  | Status.PaymentRequired
  | Status.Forbidden
  | Status.NotFound
  | Status.MethodNotAllowed
  | Status.NotAcceptable
  | Status.ProxyAuthRequired
  | Status.RequestTimeout
  | Status.Conflict
  | Status.Gone
  | Status.LengthRequired
  | Status.PreconditionFailed
  | Status.RequestEntityTooLarge
  | Status.RequestURITooLong
  | Status.UnsupportedMediaType
  | Status.RequestedRangeNotSatisfiable
  | Status.ExpectationFailed
  | Status.Teapot
  | Status.MisdirectedRequest
  | Status.UnprocessableEntity
  | Status.Locked
  | Status.FailedDependency
  | Status.UpgradeRequired
  | Status.PreconditionRequired
  | Status.TooManyRequests
  | Status.RequestHeaderFieldsTooLarge
  | Status.UnavailableForLegalReasons;

/**
 * An HTTP status that is a server error (5XX).
 */
export type ServerErrorStatus =
  | Status.InternalServerError
  | Status.NotImplemented
  | Status.BadGateway
  | Status.ServiceUnavailable
  | Status.GatewayTimeout
  | Status.HTTPVersionNotSupported
  | Status.VariantAlsoNegotiates
  | Status.InsufficientStorage
  | Status.LoopDetected
  | Status.NotExtended
  | Status.NetworkAuthenticationRequired;

/**
 * An HTTP status that is an error (4XX and 5XX).
 */
export type ErrorStatus = ClientErrorStatus | ServerErrorStatus;
