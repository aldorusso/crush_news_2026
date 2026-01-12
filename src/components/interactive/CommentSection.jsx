import React, { useState, useEffect } from "react"

/**
 * Comment Section - Componente Interactivo
 *
 * Este componente SE CARGA CON JAVASCRIPT solo cuando es visible
 * Usa Island Architecture para no bloquear el render inicial
 *
 * Features:
 * - Sistema de comentarios con respuestas anidadas
 * - Validación de formularios
 * - Ordenamiento (más recientes, más antiguos)
 * - Contador de comentarios
 */

const CommentSection = ({
  articleId,
  initialComments = [],
  allowReplies = true,
  maxDepth = 2,
  requireAuth = false,
}) => {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")
  const [replyingTo, setReplyingTo] = useState(null)
  const [sortBy, setSortBy] = useState("newest") // "newest" | "oldest"
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Ordenar comentarios
  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date) - new Date(a.date)
    }
    return new Date(a.date) - new Date(b.date)
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!newComment.trim() || !authorName.trim()) {
      alert("Por favor completa todos los campos")
      return
    }

    setIsSubmitting(true)

    const comment = {
      id: Date.now(),
      author: authorName,
      email: authorEmail,
      content: newComment,
      date: new Date().toISOString(),
      replies: [],
      parentId: replyingTo,
    }

    // Aquí irías a tu API/backend para guardar el comentario
    // await fetch('/api/comments', { method: 'POST', body: JSON.stringify(comment) })

    // Por ahora, solo lo agregamos localmente
    setComments((prev) => [...prev, comment])
    setNewComment("")
    setReplyingTo(null)
    setIsSubmitting(false)

    // Tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "comment_posted", {
        article_id: articleId,
      })
    }
  }

  const handleReply = (commentId) => {
    setReplyingTo(commentId)
  }

  const handleCancelReply = () => {
    setReplyingTo(null)
    setNewComment("")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Justo ahora"
    if (diffMins < 60) return `Hace ${diffMins} min`
    if (diffHours < 24) return `Hace ${diffHours} h`
    if (diffDays < 7) return `Hace ${diffDays} días`

    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const CommentItem = ({ comment, depth = 0 }) => {
    const replies = comments.filter((c) => c.parentId === comment.id)
    const canReply = allowReplies && depth < maxDepth

    return (
      <div className={`comment-item ${depth > 0 ? "ml-8 mt-4" : "mt-6"}`}>
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff3750] to-[#ff6b7a] flex items-center justify-center text-white font-semibold">
              {comment.author.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-900">{comment.author}</span>
                <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-2 text-sm">
              {canReply && (
                <button
                  onClick={() => handleReply(comment.id)}
                  className="text-[#ff3750] hover:text-[#ff1a38] font-medium"
                >
                  Responder
                </button>
              )}
            </div>

            {/* Reply form */}
            {replyingTo === comment.id && (
              <div className="mt-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={`Responder a ${comment.author}...`}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3750] resize-none"
                    rows="3"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-[#ff3750] text-white rounded-lg font-medium hover:bg-[#ff1a38] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Enviando..." : "Responder"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelReply}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Nested replies */}
            {replies.length > 0 && (
              <div className="mt-4">
                {replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const topLevelComments = sortedComments.filter((c) => !c.parentId)

  return (
    <div className="comment-section bg-white rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Comentarios ({comments.length})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ff3750]"
        >
          <option value="newest">Más recientes</option>
          <option value="oldest">Más antiguos</option>
        </select>
      </div>

      {/* Comment form */}
      {!replyingTo && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3750]"
            />
            <input
              type="email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              placeholder="Tu email (no se publicará)"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3750]"
            />
          </div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario..."
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3750] resize-none"
            rows="4"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#ff3750] text-white rounded-lg font-medium hover:bg-[#ff1a38] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Publicando..." : "Publicar comentario"}
          </button>
        </form>
      )}

      {/* Comments list */}
      <div className="divide-y divide-gray-200">
        {topLevelComments.length > 0 ? (
          topLevelComments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-gray-500 text-lg">Aún no hay comentarios</p>
            <p className="text-gray-400 text-sm mt-2">Sé el primero en comentar</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentSection
