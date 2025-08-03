
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Github, Linkedin, Youtube, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { accounts } from "@/data/accounts";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      // Show error message
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Mahros Al-Qabasy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out with questions, projects, opportunities, or just to say hello. I'll get back to you soon!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="What is this regarding?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-portfolio-blue hover:bg-blue-700 transition-transform hover:scale-[1.02]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col justify-between">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Connect with me:</h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 w-5 h-5 rounded-full flex items-center justify-center bulse-animation relative">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </div>
                      <p className="text-green-700">Available for freelance & collaboration!</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-semibold text-lg mb-3">Schedule a Call:</h3>
                      <Button variant="outline" className="text-portfolio-blue hover:bg-blue-50">
                        Book via Calendar
                      </Button>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-semibold text-lg mb-3">Connect with me:</h3>
                      <div className="flex gap-4">
                        {accounts.map((account) => (
                          <a
                            key={account.id}
                            href={account.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label={account.platform}
                            title={account.platform}
                          >
                            <account.icon className="h-5 w-5" />

                          </a>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-6">
                  <h3 className="font-semibold text-lg mb-3">Or email directly:</h3>
                  <a
                    href="mailto:mahros.alqabasy@gmail.com"
                    className="text-portfolio-blue hover:underline flex items-center gap-2"
                  >
                    <Mail size={18} />
                    mahros.alqabasy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
