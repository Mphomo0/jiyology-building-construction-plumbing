'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number is too long'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (!response.ok) {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to send message. Please try again.')
      } else {
        setSubmitStatus('success')
        setSubmitMessage('Your message has been sent successfully! We will get back to you soon.')
        reset()
      }
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('There was an error sending your message. Please try again.')
    }
  }

  return (
    <div>
      <Card className="border-border/60 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">
            Send Us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3" role="alert">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">Message Sent</p>
                <p className="text-sm text-green-700">{submitMessage}</p>
              </div>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="ml-auto text-green-600 hover:text-green-800"
                aria-label="Dismiss notification"
              >
                &times;
              </button>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3" role="alert">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Error</p>
                <p className="text-sm text-red-700">{submitMessage}</p>
              </div>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="ml-auto text-red-600 hover:text-red-800"
                aria-label="Dismiss notification"
              >
                &times;
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="(011) 931 0157"
                {...register('phone')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={5}
                {...register('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-neutral-950 hover:bg-[#33b6db] text-white"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
